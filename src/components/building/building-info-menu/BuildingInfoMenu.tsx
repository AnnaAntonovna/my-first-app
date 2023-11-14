import {FC} from 'react';
import { useAppContext } from '../../../middleware/ContextProvider';
import { error } from 'console';

export const BuildingInfoMenu: FC<{
    onToggleMenu: (active: boolean) => void
}> = ({onToggleMenu}) => {
    const [state, dispatch] = useAppContext();

    const { building } = state;

    if(!building) {
        throw new Error("No building active!");
    }

  return (
    <div>BuildingInfoMenu</div>
  )
}
