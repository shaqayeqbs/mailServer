import { EVENTS_END_POINTS } from "../constants/endpoints.js";
import instance from "../constants/request.js";
import { handleRequestError } from "../utils/handle-req-err.js";

export const getEvents = async () => {
  try {
    const res = await instance.get(`${EVENTS_END_POINTS.get_events}`);

    return res?.data?.data;
  } catch (err) {
    return handleRequestError(err);
  }
};
export const addEvents = async (data) => {
  console.log(data, "test");
  try {
    const res = await instance.post(`${EVENTS_END_POINTS.get_events}`, {
      Type: data?.Type,
      Date: data?.Date,
      Description: data?.Description,
      Relation_with_you: data?.Relation_with_you,
      friend_age: data?.age,
      friend_sex: data?.gender,
      friend_name: data?.name,
      require_suggestion_for_gift: data.require_suggestion_for_gift,
    });
    console.log(res);
    return res;
  } catch (err) {
    return handleRequestError(err);
  }
};
export const removeEventApi = async ({ id }) => {
  try {
    const res = await instance.delete(`${EVENTS_END_POINTS.get_events}${id}/`);
    console.log(res);
    return res;
  } catch (err) {
    return handleRequestError(err);
  }
};
export const updateEventApi = async (id, data) => {
  console.log(id);
  try {
    const res = await instance.put(`${EVENTS_END_POINTS.get_events}${id}/`, {
      Type: data?.Type,
      Date: data?.Date,
      Description: data?.Description,
      Relation_with_you: data?.Relation_with_you,
      friend_age: data?.age,
      friend_sex: data?.gender,
      friend_name: data?.name,
      require_suggestion_for_gift: data?.require_suggestion_for_gift,
      user: data?.user,
    });
    console.log(res);
    return res;
  } catch (err) {
    return handleRequestError(err);
  }
};

export const getEventsNearby = async () => {
  try {
    const res = await instance.get(`${EVENTS_END_POINTS.get_events_nearby}`);

    return res?.data?.data;
  } catch (err) {
    return handleRequestError(err);
  }
};
