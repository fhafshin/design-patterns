export default interface IDispatcher {
  dispatch(event: string, payload: Object): void;
}
