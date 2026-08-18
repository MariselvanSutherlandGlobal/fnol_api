// _neu_generated_code__dont_modify_directly_

//append_imports_start

import cors from 'cors'; //_splitter_
import { dirname } from 'path'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export let Middlewares = {
  sd_Tp9jNbUvUZ1kJnAn: () => {
    let corsOptions = {
      origin: [
        'http://localhost:4200',
        'https://fnolui.neutrinos-apps.com',
        'https://fnolapi.neutrinos-apps.com',
        'https://alpha-pt.neutrinos-apps.com',
      ],

      credentials: false,

      preflightContinue: false,
    };
    return cors(corsOptions);
  },
  //appendnew_flow
};
