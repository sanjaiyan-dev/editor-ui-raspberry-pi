import { createSlice } from '@reduxjs/toolkit'

export const EditorSlice = createSlice({
  name: 'editor',
  initialState: {
    project: {},
    projectLoaded: false,
    error: "",
    nameError: "",
    codeRunTriggered: false,
    drawTriggered: false,
    isEmbedded: false,
    codeRunStopped: false,
  },
  reducers: {
    updateImages: (state, action) => {
      if (!state.project.image_list) {state.project.image_list=[]}
      state.project.image_list = action.payload
    },
    addProjectComponent: (state, action) => {
      const count = state.project.components.length;
      state.project.components.push({"name": action.payload.name, "extension": action.payload.extension, "content": '', index: count})
    },
    setEmbedded: (state, _action) => {
      state.isEmbedded = true;
    },
    setNameError: (state, action) => {
      state.nameError = action.payload;
    },
    setProject: (state, action) => {
      state.project = action.payload;
      if (!state.project.image_list) {
        state.project.image_list = []
      }
    },
    setProjectLoaded: (state, action) => {
      state.projectLoaded = action.payload;
    },
    triggerDraw: (state) => {
      state.drawTriggered = true;
    },
    updateProjectComponent: (state, action) => {
      const extension = action.payload.extension;
      const fileName = action.payload.name;
      const code = action.payload.code;

      const mapped = state.project.components.map(item => {
        if (item.extension !== extension || item.name !== fileName) {
          return item;
        }

        return { ...item, ...{ content: code } };
      })
      state.project.components = mapped;
    },
    updateComponentName: (state, action) => {
      const key = action.payload.key;
      const fileName = action.payload.name;
      state.project.components[key].name = fileName;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    triggerCodeRun: (state) => {
      state.codeRunTriggered = true;
    },
    stopCodeRun: (state) => {
      state.codeRunStopped = true;
    },
    stopDraw: (state) => {
      state.drawTriggered = false;
    },
    codeRunHandled: (state) => {
      state.codeRunTriggered = false;
      state.codeRunStopped = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  updateImages,
  addProjectComponent,
  setEmbedded,
  setNameError,
  setProject,
  setProjectLoaded,
  triggerDraw,
  updateProjectComponent,
  updateComponentName,
  setError,
  triggerCodeRun,
  stopCodeRun,
  stopDraw,
  codeRunHandled,
} = EditorSlice.actions

export default EditorSlice.reducer
