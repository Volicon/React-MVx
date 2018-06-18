import { Record } from 'type-r';
export declare function createChangeTokensConstructor(props: object, watchers: Watchers): PropsChangeTokensCtor;
export declare const EmptyPropsChangeTokensCtor: PropsChangeTokensCtor;
export interface PropsChangeTokens {
    _update(props: object, ws: Watchers): boolean;
    _s: {};
    _isDirty: boolean;
}
export interface PropsChangeTokensCtor {
    new (props: object, state: Record): PropsChangeTokens;
}
export interface PropsUpdateTracking {
    _silent: number;
    state: Record;
    pureRender: boolean;
    _propsChangeTokens: PropsChangeTokens;
    _watchers: Watchers;
}
export interface Watchers {
    [name: string]: (value: any, name: string) => void;
}
export declare const PropsChangesMixin: {
    shouldComponentUpdate(this: PropsUpdateTracking, nextProps: object): boolean;
    componentDidUpdate(): void;
    componentDidMount(): void;
};
export declare const WatchersMixin: {
    componentWillMount(): void;
};
