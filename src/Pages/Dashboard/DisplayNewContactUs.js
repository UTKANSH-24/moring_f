import React, { useEffect, useState } from "react";
import { MdReply } from "react-icons/md";
import axiosInstance from "../../Helper/axiosInstance";
import PopupQueryReply from "../PopupQueryReply";


const DisplayNewContactUs = () => {

  const [query, setQuery] = useState([]);

  const getQuery = async () => {
    const res = await axiosInstance.post('/contact/getContactUs', { answerStatus: false });
    console.log(res.data.data);
    setQuery(res.data.data);
  }



  const [popup, setPopup] = useState(false);
  const [queryId, setQueryId] = useState();
  const handleReply = (param) => {
    setQueryId(param);
    setPopup(true);
  }

  useEffect(() => {
    (async () => {
      await getQuery();
    })();
  }, [popup]);


  return (
    // <Layout>
    <div className="min-h-[90vh] pt-5 flex flex-col flex-wrap gap-10 text-white" style={{minHeight:'100vh'}}>
      <h1 className="text-center text-3xl font-semibold text-yellow-500" style={{ marginTop: '50px'}}>
        New Arrived Queries:
      </h1>


      {/* CRUD courses section */}

      {(query.length > 0) ? <div className="mx-[10%] w-[80%] self-center flex flex-col items-center justify-center gap-10 mb-10">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-center text-3xl font-semibold">
            Queries:
          </h1>
        </div>

        <table className="table overflow-x-scroll" >
          <thead>
            <tr>
              <th>S No.</th>
              <th>Sender Name</th>
              <th>Sender Email</th>
              <th>Query</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {query?.map((element, index) => {
              // console.log("dashboard data");console.log(element);
              // console.log('log', index, element);
              return (

                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>{element.message}</td>

                  <td>
                    <button
                      onClick={() => handleReply(element._id)}
                      className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold"
                    >
                      <MdReply />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {popup && <PopupQueryReply queryId={queryId} setPopup={setPopup} />}
      </div>
        : <h1 className="text-center text-3xl font-semibold">No New Queries.</h1>
      }
    </div>
    // </Layout>
  );
};

export default DisplayNewContactUs;
