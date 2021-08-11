const NoteForm = ({ formik }: any) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mt-4">
        <div className="form-group">
          <label htmlFor="title">Title :</label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="title"
            placeholder="PLEASE ENTER TITLE HERE"
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
            placeholder="PLEASE ENTER NOTE DESCRIPTION"
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
  );
};

export default NoteForm;
