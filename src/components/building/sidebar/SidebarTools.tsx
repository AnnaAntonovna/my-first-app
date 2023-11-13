import { Action } from "../../../middleware/Actions";
import { State } from "../../../middleware/State";
import { Tool } from "../../../types";
import ListIcon from '@mui/icons-material/ViewList';

export function getSidebarTools(
    state: State,
    dispatch: React.Dispatch<Action>,
    toggleMenu: () => void
) : Tool[] {
    return [
        {
            name: "Info",
            icon: <ListIcon/>,
            action: () => {
                toggleMenu();
            }
        }
    ]
}