const Breadcrumb = ({ breadcrumbCurrent }) => {
  return (
    <nav aria-label="breadcrumb ">
      <ol className="breadcrumb bg-transparent pl-0 mt-5 ">
        <li className="breadcrumb-item">
          <a href="/">Home</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {breadcrumbCurrent}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
