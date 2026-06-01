// app/api/student-query/route.ts

import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // 🔥 GET FORM DATA
    const body = await req.json();

    console.log("FORM DATA:", body);

    // 🔥 VALIDATION
    if (
      !body.fullName ||
      !body.email ||
      !body.phone ||
      !body.course ||
      !body.college ||
      !body.language
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    // 🔥 GOOGLE AUTH
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email:
          process.env.GOOGLE_CLIENT_EMAIL,

        private_key:
          process.env.GOOGLE_PRIVATE_KEY?.replace(
            /\\n/g,
            "\n"
          ),
      },

      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    // 🔥 SHEETS INSTANCE
    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    const spreadsheetId =
      process.env.GOOGLE_SHEET_ID;

    const sheetName =
      "StudentsQueries";

    // 🔥 CHECK HEADER
    const headerResponse =
      await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: `${sheetName}!A1:G1`,
      });

    const existingHeaders =
      headerResponse.data.values;

    // 🔥 CREATE HEADERS IF EMPTY
    if (
      !existingHeaders ||
      existingHeaders.length === 0
    ) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${sheetName}!A1:G1`,
        valueInputOption: "RAW",
        requestBody: {
          values: [
            [
              "Full Name",
              "Email",
              "Phone Number",
              "Course",
              "College",
              "Language",
              "Created At",
            ],
          ],
        },
      });
    }

    // 🔥 APPEND DATA
    await sheets.spreadsheets.values.append({
      spreadsheetId,

      range: `${sheetName}!A:G`,

      valueInputOption:
        "USER_ENTERED",

      requestBody: {
        values: [
          [
            body.fullName,

            body.email,

            // Store as text
            `'${body.phone}`,

            body.course,

            body.college,

            body.language,

            new Date().toLocaleString(
              "en-IN",
              {
                timeZone:
                  "Asia/Kolkata",
              }
            ),
          ],
        ],
      },
    });

    // 🔥 SUCCESS
    return NextResponse.json({
      success: true,
      message:
        "Data saved successfully 🚀",
    });
  } catch (error: any) {
    console.error(
      "GOOGLE SHEETS ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error?.message ||
          "Failed to save data",
      },
      { status: 500 }
    );
  }
}