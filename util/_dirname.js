import { fileURLToPath } from "url";
import path, { join } from "path";

const_filename=fileURLToPath(import.meta.url)
const_dirname=path.dirname(join(_filename,"../"))
export { _dirname }
