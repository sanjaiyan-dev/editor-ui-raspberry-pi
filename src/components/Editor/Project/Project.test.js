import React from "react";
import { fireEvent, render } from "@testing-library/react"
import { Provider } from 'react-redux';
import configureStore, {getActions} from 'redux-mock-store';

import Project from "./Project";
import axios from "axios";

jest.mock('axios');

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push: jest.fn()
    })
  }));

describe("Testing the remix button when logged in", () => {
    let store;
    let remixButton;
    
    beforeEach(() => {
        const middlewares = []
        const mockStore = configureStore(middlewares)
        const initialState = {
            editor: {
                project: {
                    identifier: "hello-world-project",
                    components: []
                },
            },
            auth: {
                user: []
            }
        }
        store = mockStore(initialState);
        const {getByText} = render(<Provider store={store}><Project/></Provider>);
        remixButton = getByText(/Remix/)
    })

    test("Remix button renders when the user is logged in", () => {
        expect(remixButton.textContent).toBe("Remix Project");
    })

    test("Clicking remix button posts to correct remix url", () => {
        axios.post.mockImplementationOnce(() => Promise.resolve({'data': { 'project': {'identifier': "remixed-hello-project", 'project_type': 'python'}}}))

        fireEvent.click(remixButton)
        const api_host = process.env.REACT_APP_API_ENDPOINT;
        expect(axios.post).toHaveBeenCalledWith(`${api_host}/api/projects/phrases/${store.getState()['editor']['project']['identifier']}/remix`)

    })
})

describe("Testing the remix button when not logged in", () => {
    let queryByText;
    
    beforeEach(() => {
        const middlewares = []
        const mockStore = configureStore(middlewares)
        const initialState = {
            editor: {
                project: {
                    identifier: "hello-world-project",
                    components: []
                },
            },
            auth: {
                user: null
            }
        }
        const store = mockStore(initialState);
         ({queryByText} = render(<Provider store={store}><Project/></Provider>));
    })

    test("No remix button when not logged in", () => {
        expect(queryByText('Remix')).toBeNull();
    })
})
