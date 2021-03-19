import { PEOPLE } from "../constants";

export const requestPeople=(peopleType)=>({
    type:PEOPLE.LOAD,
    peopleType,
});

export const requestPeopleSuccess=people=>({
    type:PEOPLE.LOAD_SUCCESS,
    people,
});

export const requestPeopleError=()=>({
    type:PEOPLE.LOAD_FAIL,
});
