import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ VALIDATION
    if (!body.email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required",
        },
        { status: 400 }
      );
    }

    // ✅ EMAIL VALIDATION
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email",
        },
        { status: 400 }
      );
    }

    // ✅ GOOGLE AUTH
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

    // ✅ SHEETS INSTANCE
    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    const spreadsheetId =
      process.env.GOOGLE_SHEET_ID!;

    // ✅ GET EXISTING DATA
    const existingData =
      await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: "Newsletter!A:B",
      });

    const rows =
      existingData.data.values || [];

    // ✅ CREATE HEADER IF EMPTY
    if (rows.length === 0) {
      await sheets.spreadsheets.values.append({
        spreadsheetId,

        range: "Newsletter!A1:B1",

        valueInputOption: "RAW",

        requestBody: {
          values: [["Email", "Subscribed At"]],
        },
      });
    }

    // ✅ CHECK DUPLICATES
    const emailExists = rows.some(
      (row) =>
        row[0]?.toLowerCase() ===
        body.email.toLowerCase()
    );

    if (emailExists) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Email already subscribed",
        },
        { status: 409 }
      );
    }

    // ✅ SAVE TO SHEET
    await sheets.spreadsheets.values.append({
      spreadsheetId,

      range: "Newsletter!A:B",

      valueInputOption: "USER_ENTERED",

      requestBody: {
        values: [
          [
            body.email,

            new Date().toLocaleString(),
          ],
        ],
      },
    });

    // ✅ SUCCESS
    return NextResponse.json({
      success: true,
      message:
        "Subscribed Successfully 🚀",
    });

  } catch (error) {
    console.log(
      "NEWSLETTER ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to subscribe",
      },
      { status: 500 }
    );
  }
}