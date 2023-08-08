// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import style from './userList.module.css'

// interface User {
//     id: string;
//     name: string;
//     email: string;
//     address: string;
//     isSuspended: boolean;
// }

// const usuario: React.FC = () => {
//     const [users, setUsers] = useState<User[]>([]);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await axios.get<User[]>('/user');
//                 setUsers(response.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchUsers();
//     }, []);

//     const handleSuspendUser = async (userId: string) => {
//         try {
//             await axios.put(`/user/${userId}/suspend`);
//             const updatedUsers = users.map((user) =>
//                 user.id === userId ? { ...user, isSuspended: true } : user
//             );
//             setUsers(updatedUsers);
//             alert('Usuario suspendido exitosamente.')
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     const handleUnsuspendUser = async (userId: string) => {
//         try {
//             await axios.put(`/user/${userId}/unsuspend`);
//             const updatedUsers = users.map((user) =>
//                 user.id === userId ? { ...user, isSuspended: false } : user
//             );
//             setUsers(updatedUsers);
//             alert('Suspensión del usuario eliminada.')
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     const handleDeleteUser = async (userId: string) => {
//         try {
//             await axios.delete(`/user/${userId}`);
//             const updatedUsers = users.filter((user) => user.id !== userId);
//             setUsers(updatedUsers);
//             alert('Usuario eliminado exitosamente.')
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     return (
//         <div className={style.listContain}>
//             <h2>Lista de usuarios</h2>
//             <table className={style.table}>
//                 <thead>
//                     <tr>
//                         <th>Nombre</th>
//                         <th>Correo</th>
//                         <th>Dirección</th>
//                         <th>Estado</th>
//                         <th>Acciones</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user.id}>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.address}</td>
//                             <td>{user.isSuspended ? '🔴' : '🟢'}</td>
//                             <td>
//                                 <div className={style.butonsUsers}>
//                                     {user.isSuspended ? (
//                                         <button onClick={() => handleUnsuspendUser(user.id)}>
//                                             Quitar suspensión
//                                         </button>
//                                     ) : (
//                                         <button onClick={() => handleSuspendUser(user.id)}>
//                                             Suspender
//                                         </button>
//                                     )}
//                                     <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
//                                 </div>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default usuario;

import React from "react";
//import s from "./Favoritos.module.css";

function usuario() {
  return (
    <div className="absolute ml-1700 h-700 w-1400">
      {/* <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
          <tr>
            <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
              <div class="inline-flex items-center gap-x-3">
                <input
                  type="checkbox"
                  class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                />

                <span>#3064</span>
              </div>
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
              Jan 5, 2022
            </td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}

export default usuario;
