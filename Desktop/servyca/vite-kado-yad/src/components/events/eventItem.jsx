import moment from "jalali-moment";
import Card from "../ui/Card";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap-icons";
import useEventsStore from "../../store/event-store";
import { removeEventApi } from "../../@core/api/events";
import { toast } from "react-toastify";
import { eventRelation } from "../../@core/data/event-relation";

function EventItem({ item }) {
  // Check if the item has a valid Date value
  if (!item?.Date) {
    // Handle the case where the date is missing or invalid
    return <div>Invalid Date</div>;
  }

  const shamsiDate = moment(item.Date, "YYYY-MM-DD")
    .locale("fa")
    .format("D MMMM");

  const { removeEvent } = useEventsStore();

  const removeEventHandler = async () => {
    try {
      // Call the API to remove the event
      const res = await removeEventApi({ id: item.id }); // Adjust the API call based on your actual API endpoint

      if (res.data.status === "OK") {
        // If the removal is successful, update the store
        toast.success(res.data.message);
        removeEvent(item.id);
      } else {
        toast.error("Error removing event:", res.data.message);
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Error removing event:", error.message);
    }
  };

  const relation = eventRelation.find(
    (event) => item.Relation_with_you === event.value
  );
  console.log(relation);

  return (
    <Card className="w-full py-1 my-3 flex relative justify-start gap-2 items-center">
      <div>
        <Image src="/assets/banner.png" width={100} height={100} />
      </div>

      <div className="text-right">
        <div>{relation?.label}</div>
        <div>{shamsiDate}</div>
        <button className="text-[15px]">
          نمیدونی هدیه چه بخری؟
          <span className="text-primary mx-1 font-bold">کلیک کن</span>
        </button>
      </div>

      <div className="absolute left-3 top-5">
        <div>
          <Link
            to={`/events/edit/${item.id}`}
            className="button !w-min !py-1 !m-0 !px-2 !text-[11px]"
          >
            ویرایش
          </Link>
        </div>
        <button
          onClick={removeEventHandler}
          className="button !w-min !py-1 !m-0 !mt-1 !text-[11px]"
        >
          حذف
        </button>
      </div>
    </Card>
  );
}

export default EventItem;
