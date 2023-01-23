import Sidebar from "./components/Sidebar";
import { FaSearch } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';




function App() {
  return (

    <div className="body">

      <nav className="flex lg:px-[6rem] bg-white border-b shadow-lg relative items-center z-50 justify-between py-5">
          
          <div className="text-lg font-bold">
            Dashboard Logotipo
          </div>

          <div className="flex justify-between">

              <div className="flex items-center border-2 p-2 mr-8 rounded-xl">
                <span className="w-6 text-gray-400 align-middle ml-3"><FaSearch /></span>
                <input type="text" placeholder="Buscar..." className="ml-2 outline-none w-full" />
              </div>

              <div className="flex items-center px-5">      
                <div className="border-2 shadow-lg border-gray-400 rounded-full p-4 cursor-pointer hover:bg-sky-400 duration-200">
                  <span className="text-gray-400 "><FaBell /></span>              
                </div>                
              </div>

              <div className="flex items-center">
                <div className="duration-200 cursor-pointer rounded-lg px-6">  

                  <div className="px-4 flex">                    
                    <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" className="w-[60px] rounded-full h-[60px] border-none" />
                    
                    <div className="flex justify-between md:inline-flex p-4 items-center">
                      <span className="text-gray-600 text-[18px]">Ann Lee</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 fill-current ml-2" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"></path></svg>
                    </div>

                  </div>
                </div>
              </div>

          </div>
      </nav>

      <div className="flex flex-col items-center justify-center py-2">
        <Sidebar/>
      </div>
      

      <div className="flex-col bg-indigo-50 w-[85%] ml-auto mr-10">

          <div className="flex justify-between relative items-center mt-5 space-x-4 px-6 py-4 border-b-2 border-gray-300">

            <div className="ml-7">
              <h2 className="font-normal text-2xl"> Inventory - <span className="font-bold text-[#2B92EC]"> Computers</span></h2>
            </div>
    

            <div className="flex justify-between space-x-6 mt-4">

              <div className="bg-white border-2 border-[#2B92EC] rounded-xl shadow-lg cursor-pointer">
                <div className="flex items-center justify-around px-6 py-4">                  
                  <div className="text-center">
                    <span className="text-[#2B92EC]"> Export to excel</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-[#2B92EC] rounded-xl shadow-lg cursor-pointer">
                <div className="flex items-center justify-around px-6 py-4">                  
                  <div className="text-center">
                    <span className="text-[#2B92EC]"> Import Data</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#2B92EC] rounded-xl shadow-lg cursor-pointer">
                <div className="flex items-center justify-around px-6 py-4">                  
                  <div className="text-center">                    
                    <div className="flex justify-between md:inline-flex items-center">

                      <span className="text-white mr-2"><FaPlus /></span>      
                      <span className="text-white">New Item</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>

          </div>

          <div className="px-5 pb-5">
            <div className="max-w-full mx-auto relative items-center mt-5 bg-white shadow-lg rounded-xl">
                <div className="relative overflow-x-auto flex justify-between">
                    <div className="p-4">
                        <div className="relative mt-2">
                          <div className="flex items-center border-2 p-2 mr-8 rounded-xl bg-white">
                            <span className="w-6 text-gray-400 align-middle ml-3"><FaSearch /></span>
                            <input type="text" placeholder="Search Item..." className="ml-2 outline-none w-full text-sm " />
                          </div>
                        </div>
                    </div>
                </div>

                <div className="p-1 ">
                  <table className="w-full text-sm text-left p-2 rounded-xl">
                      <thead className="uppercase bg-gray-50 text-gray-600">
                        <tr>
                          <th scope="col" class="p-4">
                              <div className="flex items-center">
                                <input type="checkbox" class="w-4 h-4 text-[#2B92EC] rounded border-gray-300"/>
                              </div>
                          </th>

                          <th scope="col" className="px-4 py-3">
                            ID Product
                          </th>

                          <th scope="col" className="px-4 py-3">
                            Product Name
                          </th>

                          <th scope="col" className="px-4 py-3">
                            No. Serial
                          </th>

                          <th scope="col" className="px-4 py-3">
                            Registered By
                          </th>

                          <th scope="col" className="px-4 py-3">
                            Date
                          </th>

                          <th scope="col" className="px-4 py-3">
                            Items
                          </th>

                          <th scope="col" className="px-4 py-3">
                            Status
                          </th>

                          

                        </tr>
                      </thead>

                      <tbody>
                          <tr className="bg-transparent border-b-1 border-gray-200 hover:bg-gray-50 text-gray-400">
                              <td className="w-4 p-4">
                                <div className="flex items-center">
                                  <input type="checkbox" class="w-4 h-4 text-[#2B92EC] rounded border-gray-300"/>
                                </div>
                              </td>
                              
                              <td className="px-4 py-3 font-medium text-gray-500 whitespace-nowrap">
                                Apple MacBook Pro 17"
                              </td>

                              <td className="px-4 py-3">
                                Apple
                              </td>

                              <td className="px-4 py-3">
                                45888AS25
                              </td>

                              <td className="px-4 py-3">
                                Admin User
                              </td>

                              <td className="px-4 py-3">
                                22nd Jan 2023
                              </td>

                              <td className="px-4 py-3">
                                4
                              </td>

                              <td scope="col" className="px-4 py-3">
                                <span className="h-[10px] w-[10px] bg-green-500 rounded-full inline-block"></span>
                                <span className="ml-1">In use</span>
                              </td>

                          </tr>

                          <tr className="bg-transparent border-b-1 border-gray-200 hover:bg-gray-50 text-gray-400">
                              <td className="w-4 p-4">
                                <div className="flex items-center">
                                  <input type="checkbox" class="w-4 h-4 text-[#2B92EC] rounded border-gray-300"/>
                                </div>
                              </td>
                              
                              <td className="px-4 py-3 font-medium text-gray-500 whitespace-nowrap">
                                Apple MacBook Pro 17"
                              </td>

                              <td className="px-4 py-3">
                                Apple
                              </td>

                              <td className="px-4 py-3">
                                45888AS25
                              </td>

                              <td className="px-4 py-3">
                                Admin User
                              </td>

                              <td className="px-4 py-3">
                                22nd Jan 2023
                              </td>

                              <td className="px-4 py-3">
                                4
                              </td>

                              <td scope="col" className="px-4 py-3">
                                <span className="h-[10px] w-[10px] bg-green-500 rounded-full inline-block"></span>
                                <span className="ml-1">In use</span>
                              </td>

                          </tr>

                          <tr className="bg-transparent border-b-1 border-gray-200 hover:bg-gray-50 text-gray-400">
                              <td className="w-4 p-4">
                                <div className="flex items-center">
                                  <input type="checkbox" class="w-4 h-4 text-[#2B92EC] rounded border-gray-300"/>
                                </div>
                              </td>
                              
                              <td className="px-4 py-3 font-medium text-gray-500 whitespace-nowrap">
                                27" Momitor 4k Samsung
                              </td>

                              <td className="px-4 py-3">
                                Samsung
                              </td>

                              <td className="px-4 py-3">
                                8584445LS
                              </td>

                              <td className="px-4 py-3">
                                Admin User
                              </td>

                              <td className="px-4 py-3">
                                22nd Jan 2023
                              </td>

                              <td className="px-4 py-3">
                                1
                              </td>

                              <td scope="col" className="px-4 py-3">
                                <span className="h-[10px] w-[10px] bg-red-500 rounded-full inline-block"></span>
                                <span className="ml-1">Inactive</span>
                              </td>

                          </tr>
                      </tbody>

                  </table>
                </div>

            </div>
          </div>

      </div>



    </div>
  );
}

export default App;
