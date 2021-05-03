import NormalizedObjects from "../../NormalizedObjects/NormalizedObjects";
import Project from "../Project/ProjectInterface";

export default interface ProjectList {
  projectList: NormalizedObjects<Project>;
}
