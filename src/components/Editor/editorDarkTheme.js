import { EditorView } from '@codemirror/view';
import '@rpf/sauce/scss/properties/_font-weight.scss';
import '@rpf/sauce/scss/properties/_font-size.scss';
import '@rpf/sauce/scss/properties/_line-height.scss';

export const editorDarkTheme = EditorView.theme({
  "&": {
    "height": "400px",
    "background-color": "#333333"
  },
  ".cm-line": {
    "font-size": "inherit",
    "line-height": "inherit"
  },
  ".cm-scroller": {overflow: "auto"},
  ".cm-gutter": {
    "background-color": "#565555",
    "color": "#C1C1C1",
    "font-size": "inherit",
    "line-height": "inherit"
  },
  ".cm-gutters": {
    "border": "none"
  },
  ".cm-activeLine": {
    "background-color": "#565555",
    "caret-color": "white"
  },
  ".cm-activeLineGutter": {
    "background-color": "#C1C1C1",
    "color": "#333333"
  },
  ".ͼa": {color: "#FF00A4"},
  ".ͼb": {color: "#1498D0"},
  ".ͼc": {color: "#1498D0"},
  ".ͼd": {color: "#6CE68D"},
  ".ͼi": {color: "#1498D0"},
  ".ͼl": {color: "#C1C1C1"},
})
