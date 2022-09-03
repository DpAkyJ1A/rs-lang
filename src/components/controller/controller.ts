import ApiService from '../api/api';
import { IWord } from '../api/interfaces';
import { parseHashString } from '../utils/parseHashString';
import { updateSideMenu } from '../view/side-menu/side-menu';

export default class Controller extends ApiService {
    state: IState;
    drawView;
    constructor(state: IState, cbView: TCallback) {
        super();
        this.state = state;
        this.drawView = cbView;
        document.addEventListener('event', () => {
            this.handleLocation();
        });
        window.addEventListener('popstate', () => {
            this.handleLocation();
        });
    }

    handleLocation() {
        const params = parseHashString(window.location.href);
        this.updateState(params);
        this.drawMain(params.view);
    }

    updateState(params: { [N: string]: string }) {
        this.setViewState = params.view;
        if (params['view'] === 'textbook') {
            this.setTextbookState = { group: params.group || '1', page: params.page || '1' };
        }
    }

    set setViewState(view: string) {
        this.state.view = view;
    }

    set setTextbookState(params: { group: string; page: string }) {
        this.state.textbook.group = +params.group;
        this.state.textbook.page = +params.page;
    }

    // public async getWords(page: number, group: number) {
    //     const data = await super.getWords(page, group);
    //     this.drawView(data, {
    //         group: this.state.textbook.group,
    //         page: this.state.textbook.page,
    //         view: this.state.view,
    //     });
    // }

    public async drawMain(view: string) {
        updateSideMenu(view);
        if (view === 'textbook') {
            const data = await super.getWords(this.state.textbook.page, this.state.textbook.group);
            this.drawView(this.state, data);
        } else if (view === 'dictionary') {
            const data = await super.getWords(this.state.dictionary.page, this.state.dictionary.group);
            this.drawView(this.state, data);
        } else if (view === 'stats') {
            this.drawView(this.state);
        } else {
            this.drawView(this.state);
        }
    }
}

export interface IState {
    view: string;
    textbook: {
        page: number;
        group: number;
    };
    dictionary: {
        page: number;
        group: number;
    };
}

type TCallback = {
    (props: IState, data?: IWord[]): void;
};
