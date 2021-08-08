const Note = ({ formik, noteList, remove }: any) => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-light bg-light border p-1">
        <a className="navbar-brand text-muted" href="#">
          G Notes
        </a>
      </nav>
      <div className="row">
        <div className="col-4">
          <ul
            className="list-group"
            style={{ height: "100vh", border: "1px solid rgb(227,227,227)" }}
          >
            {noteList.length > 0 &&
              noteList.map((data: any, index: number) => (
                <li
                  className="list-group-item"
                  key={index}
                  style={{ color: "gray" }}
                >
                  <p style={{ float: "right" }} onClick={() => remove(data)}>
                    &#10006;
                  </p>
                  <div> {data.title}</div>
                  <div>{data.body}</div>
                </li>
              ))}
          </ul>
        </div>
        <div className="col-8">
          <form onSubmit={formik.handleSubmit}>
            <div className="d-flex justify-content-end mt-2">
              <button type="button" className="btn btn-outline-dark">
                &#10010;Add Note
              </button>
            </div>
            <div className="mt-4">
              <div className="form-group">
                <label htmlFor="title">Title :</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  aria-describedby="title"
                  placeholder="Please enter title here"
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title ? (
                  <div className="text-danger">{formik.errors.title}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea
                  className="form-control"
                  name="body"
                  onChange={formik.handleChange}
                  value={formik.values.body}
                  id="body"
                  style={{ height: "350px" }}
                />
                {formik.touched.body && formik.errors.body ? (
                  <div className="text-danger">{formik.errors.body}</div>
                ) : null}
              </div>
            </div>
            <div className="d-flex justify-content-end mt-2">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Note;
