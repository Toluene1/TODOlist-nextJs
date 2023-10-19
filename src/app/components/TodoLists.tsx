export default function TodoLists() {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-bold text-black">
              <th>Name</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Cy Ganderton</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>{" "}
    </div>
  );
}
