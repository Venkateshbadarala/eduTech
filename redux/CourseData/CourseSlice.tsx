import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCourseData = createAsyncThunk(
    'courseData/fetchCourseData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('/api/courses');
            if (!response.ok) throw new Error('Failed to fetch courses');
            return await response.json();
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
        }
    }
);

interface Course {
    id: string;
    name: string;
    description: string;
    [key: string]: any;
}

interface CourseDataState {
    courses: Course[];
    loading: boolean;
    error: string | null;
}

const initialState: CourseDataState = {
    courses: [],
    loading: false,
    error: null,
};

const courseSlice = createSlice({
    name: 'courseData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourseData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCourseData.fulfilled, (state, action) => {
                state.loading = false;
                state.courses = action.payload;
            })
            .addCase(fetchCourseData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default courseSlice.reducer;