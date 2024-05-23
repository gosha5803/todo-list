import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { Provider } from 'react-redux'
import { AppStore, createStore } from "shared/store";

export var renderWithState = (component: ReactNode, preloadedState: AppStore) => render(<Provider store={createStore(preloadedState)}>{component}</Provider>)