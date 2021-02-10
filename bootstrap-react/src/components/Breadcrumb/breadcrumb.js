const Breadcrumb = (props) => {
  return (
    <>
      <div className="container ">
        <nav aria-label="breadcrumb ">
          <ol className="breadcrumb bg-transparent pl-0 mt-5 ">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {props.breadcrumbCurrent}
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Breadcrumb;
