
export type AppState = 'INTRO' | 'MEMORIES' | 'RECOLLECTIONS' | 'SHARED_MOMENTS' | 'LETTER' | 'STRENGTH' | 'INVITATION' | 'CELEBRATION';

export interface PoemResponse {
  poem: string;
  closing: string;
}
