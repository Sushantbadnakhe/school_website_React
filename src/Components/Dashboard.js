import { Sn } from "./Sn";

export const Dsh = () => {
  return (
    <div className="container my-5 mx-auto">
      <form className="row gy-2 gx-3 align-items-center flex-wrap">
        <div className="col-7">
          <label className="visually-hidden" for="autoSizingInput">
            Notification
          </label>
          <input
            type="text"
            className="form-control"
            id="autoSizingInput"
            placeholder="Add Notice here"
          />
        </div>
        <div className="col-3">
          <label className="visually-hidden" for="autoSizingInputGroup">
            Attach Link
          </label>
          <div className="input-group">
            <div className="input-group-text col-auto">@</div>
            <input
              type="text"
              className="form-control"
              id="autoSizingInputGroup"
              placeholder="Attach Link"
            />
          </div>
        </div>

        <div className="col-1">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>

      <hr className="mt-5" />
      <Sn />
    </div>
  );
};
