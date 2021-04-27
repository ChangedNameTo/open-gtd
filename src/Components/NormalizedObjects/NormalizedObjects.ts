export default interface NormalizedObjects<T> {
  byId: { [id: string]: T };
  allIds: string[];
}
