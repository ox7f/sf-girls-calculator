type TableT = {
  head: string[];
  body: string[][];
  foot: string[];
};

interface TableI {
  data: TableT;
}

const Table: React.FC<TableI> = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {data.head.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.body.map((items, index) => (
          <tr key={index}>
            {items.map((item, i) =>
              i === 0 ? (
                <th scope="row" key={`${index} ${i}`}>
                  {item}
                </th>
              ) : (
                <td key={`${index} ${i}`}>{item}</td>
              )
            )}
          </tr>
        ))}
      </tbody>

      <tfoot>
        <tr>
          {data.foot.map((item, index) => (index === 0 ? <th key={index}>&sum;</th> : <td key={index}>{item}</td>))}
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
