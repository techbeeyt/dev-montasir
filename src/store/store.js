import { configureStore } from '@reduxjs/toolkit';

import AppState from './AppState';
import SkillsState from './SkillsState';

export default configureStore({
    reducer: {
        AppState: AppState,
        SkillState: SkillsState,
    }
});