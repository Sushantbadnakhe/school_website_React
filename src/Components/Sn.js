export const Sn = () => {
  return (
    <div className="container  text-center">
      <div className="text-center ">Add Notice</div>
      <div className=" p-3 row border rounded align-items-center text-start mt-5">
        <div class="col-7 text-wrap">Notification text</div>
        <div className="col-3">date</div>
        <div className="col-1">
          <button className="btn btn-danger m-auto">Delete</button>
        </div>
      </div>
    </div>
  );
};
