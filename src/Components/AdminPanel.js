export const AdminPanel = () => {
  return (
    <div className="hero container">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3">
        <div className="col-lg-7 p-3 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
            Border hero with cropped image and shadows
          </h1>
          <p className="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Default
            </button>
          </div>
        </div>
      </div>

      <nav
        className="navbar navbar-expand mb-3"
        aria-label="Second navbar example"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample02"
            aria-controls="navbarsExample02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <form role="search">
              <input
                class="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>

      <div class="row align-items-md-stretch">
        <div class="col-md-6">
          <div class="h-100 rounded-3">
            <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action d-flex gap-3 py-3"
                  aria-current="true"
                >
                  <img
                    src="https://github.com/twbs.png"
                    alt="twbs"
                    width="32"
                    height="32"
                    class="rounded-circle flex-shrink-0"
                  />
                  <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 class="mb-0">List group item heading</h6>
                      <p class="mb-0 opacity-75">
                        Some placeholder content in a paragraph.
                      </p>
                    </div>
                    <small class="opacity-50 text-nowrap">now</small>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action d-flex gap-3 py-3"
                  aria-current="true"
                >
                  <img
                    src="https://github.com/twbs.png"
                    alt="twbs"
                    width="32"
                    height="32"
                    class="rounded-circle flex-shrink-0"
                  />
                  <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 class="mb-0">Another title here</h6>
                      <p class="mb-0 opacity-75">
                        Some placeholder content in a paragraph that goes a
                        little longer so it wraps to a new line.
                      </p>
                    </div>
                    <small class="opacity-50 text-nowrap">3d</small>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action d-flex gap-3 py-3"
                  aria-current="true"
                >
                  <img
                    src="https://github.com/twbs.png"
                    alt="twbs"
                    width="32"
                    height="32"
                    class="rounded-circle flex-shrink-0"
                  />
                  <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 class="mb-0">Third heading</h6>
                      <p class="mb-0 opacity-75">
                        Some placeholder content in a paragraph.
                      </p>
                    </div>
                    <small class="opacity-50 text-nowrap">1w</small>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 p-5 bg-body-tertiary border rounded-3">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
