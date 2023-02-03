import Title from "../atoms/Title";
import Widge from "../atoms/Widge";

function ListStudent({listStudent}) {
    return (
        <>
            <Title msn="HOLA"></Title>
            {
                listStudent.map(itemStudent => (
                    <Widge key={itemStudent.id} item={itemStudent}></Widge>
                )
                )
            }
        </>
      );
}
export default ListStudent;