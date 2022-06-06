import { createAction, props } from "@ngrx/store";

export const inc=createAction(
    '[app] incrementing value',
    props<{badjaavalue:number}>()

)