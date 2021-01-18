import { createContext } from 'react';
import { PlayerContext as PlayerContextType } from './PlayerContext.types'

const PlayerContext = createContext<PlayerContextType>({} as PlayerContextType);

export default PlayerContext;
