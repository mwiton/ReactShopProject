import {createSelector} from "reselect";

const directorySelector = state => state.directory;

const directoriesSelector = createSelector(directorySelector, directory => directory.directories);

export default directoriesSelector;