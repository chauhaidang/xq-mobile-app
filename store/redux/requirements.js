import { createSlice } from '@reduxjs/toolkit';
import { generateDummyTestPlans } from '../../models/testplan';

const requirementsSlice = createSlice({
  name: 'requirement',
  initialState: { requirements: generateDummyTestPlans(10) },
  reducers: {},
});

export default requirementsSlice.reducer;
