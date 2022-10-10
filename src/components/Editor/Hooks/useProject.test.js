import { renderHook } from "@testing-library/react";
import {useProject} from './useProject';
import { setProject } from "../EditorSlice";
import { waitFor } from "@testing-library/react";


jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => { return jest.fn() }
}))

jest.mock('../EditorSlice', () => ({
  setProject: jest.fn(),
  setProjectLoaded: jest.fn()
}))

jest.mock('../../../utils/apiCallHandler', () => ({
  readProject: async (identifier) => Promise.resolve({'data': {'identifier': identifier, 'project_type': 'python'}})
  }))

const defaultHtmlProject = {
  project_type: 'html',
  components: [
    { extension: 'html', name: 'index',
      content: "<html>\n  <head>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">\n  </head> <body>\n    <h1>Heading</h1>\n    <p>Paragraph</p>\n  </body>\n</html>" },
    { extension: 'css', name: 'style', content: "h1 {\n  color: blue;\n}" },
    { extension: 'css', name: 'test', content: "p {\n  background-color: red;\n}" }
  ]
}

const defaultPythonProject = {
  project_type: 'python',
  components: [
    { extension: 'py', name: 'main',
      content: "", index: 0, default: true },
  ]
}

const cachedProject = {
  project_type: 'python',
  identifier: 'hello-world-project',
  components: []
}

const uncachedProject = {
  project_type: 'python',
  identifier: 'hello-world-project',
}

const project1 = {
  project_type: 'python',
  identifier: 'my-favourite-project',
}

test("If no identifier and project type is HTML uses default HTML project", () => {
  renderHook(() => useProject('html'))
  expect(setProject).toHaveBeenCalledWith(defaultHtmlProject)
})

test("If no identifier and project type is not HTML uses default python project", () => {
  renderHook(() => useProject('blah'))
  expect(setProject).toHaveBeenCalledWith(defaultPythonProject)
})

test("If cached project matches identifer uses cached project", () => {
  localStorage.setItem('project', JSON.stringify(cachedProject))
  renderHook(() => useProject('python', 'hello-world-project'))
  expect(setProject).toHaveBeenCalledWith(cachedProject)
})

test("If cached project matches identifer clears cached project", () => {
  localStorage.setItem('project', JSON.stringify(cachedProject))
  renderHook(() => useProject('python', 'hello-world-project'))
  expect(localStorage.getItem('project')).toBeNull()
})

test("If cached project does not match identifer does not use cached project", async () => {
  localStorage.setItem('project', JSON.stringify(cachedProject))
  renderHook(() => useProject('python', 'my-favourite-project'))
  await waitFor(() => expect(setProject).not.toHaveBeenCalledWith(cachedProject))
})

test("If cached project does not match identifer loads correct uncached project", async () => {
  localStorage.setItem('project', JSON.stringify(cachedProject))
  renderHook(() => useProject('python', 'my-favourite-project'))
  await waitFor(() => expect(setProject).toHaveBeenCalledWith(project1))
})

test("If cached project does not match identifer clears cached project", () => {
  localStorage.setItem('project', JSON.stringify(cachedProject))
  renderHook(() => useProject('python', 'hello-world-project'))
  expect(localStorage.getItem('project')).toBeNull()
})

test("If no cached project loads uncached project", async () => {
  renderHook(() => useProject('python', 'hello-world-project'))
  await waitFor(() => expect(setProject).toHaveBeenCalledWith(uncachedProject))
})

afterEach(() => {
  localStorage.removeItem('project')
})