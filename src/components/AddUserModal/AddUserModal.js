import React, { useState } from 'react';
import axios from "axios";
import { useFormik } from "formik";



const AddUserModal = ({ students, setStudents, setOpenModal, editingUser, setEditingUser}) => {
  const formik = useFormik({
        initialValues: {
            name: "",
            group: "",
            year: "",
            phone: "",
            email: ""
        },

        onSubmit: async (values) => {
            const uploadUser = await axios.post('https://6298e48abf77b60258233216.mockapi.io/students', values)
            setStudents([...students, uploadUser.data])
            setOpenModal(false)

        }
    })

    return (
        <div>
            <div className="App">
                <div className='fixed justify-center flex w-full bg-white p-6 '>
                    <div className='absolute right-9 top-9 cursor-pointer text-black-500' onClick={() => {
                        setOpenModal(false)
                        setEditingUser(null)
                    }}>
                        {<box-icon name='x'></box-icon>}
                        x
                    </div>
                    <form onSubmit={ formik.handleSubmit }>
                        <div>
                            <div className="bg-white shadow rounded-lg p-6">
                                <div className="grid lg:grid-cols-2 gap-6">
                                    <div
                                        className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                                        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                            <p>
                                                <label htmlFor="name" className="bg-white text-gray-600 px-1">ФИО*</label>
                                            </p>
                                        </div>
                                        <p>
                                            <input onChange={formik.handleSubmit}
                                                   id="name"
                                                   name="name" autoComplete="false" tabIndex="0"
                                                   type="text"
                                                   className="py-1 px-1 text-gray-900 outline-none block h-full w-full"
                                                   value={formik.values.name}
                                            />
                                        </p>
                                    </div>
                                    <div
                                        className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                                        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                            <p>
                                                <label htmlFor="group" className="bg-white text-gray-600 px-1">Группа*</label>
                                            </p>
                                        </div>
                                        <p>
                                            <input onChange={formik.handleSubmit} name="group" autoComplete="false" tabIndex="0"
                                                   type="text"
                                                   id="group"
                                                   className="py-1 px-1 outline-none block h-full w-full"
                                                   value={formik.values.group}/>
                                        </p>
                                    </div>
                                    <div
                                        className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                                        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                            <p>
                                                <label htmlFor="year" className="bg-white text-gray-600 px-1">Год*</label>
                                            </p>
                                        </div>
                                        <p>
                                            <input onChange={formik.handleSubmit} name="year" autoComplete="false" tabIndex="0"
                                                   type="date"
                                                   id="year"
                                                   className="py-1 px-1 outline-none block h-full w-full"
                                                   value={formik.year}/>
                                        </p>
                                    </div>
                                    <div
                                        className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                                        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                            <p>
                                                <label htmlFor="phone" className="bg-white text-gray-600 px-1">Телефон*</label>
                                            </p>
                                        </div>
                                        <p>
                                            <input onChange={formik.handleSubmit} name="phone" autoComplete="false" tabIndex="0"
                                                   type="text"
                                                   id="phone"
                                                   className="py-1 px-1 outline-none block h-full w-full text-black"
                                                   value={formik.values.phone}/>
                                        </p>
                                    </div>
                                    <div
                                        className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                                        <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                            <p>
                                                <label htmlFor="email" className="bg-white text-gray-600 px-1">Почта*</label>
                                            </p>
                                        </div>
                                        <p>
                                            <input onChange={formik.handleSubmit} name="email" autoComplete="false" tabIndex="0"
                                                   type="text"
                                                   id="email"
                                                   className="py-1 px-1 outline-none block h-full w-full"
                                                   value={formik.values.email}/>
                                        </p>
                                    </div>
                                </div>
                                <div className="border-t mt-6 pt-3">
                                    <button
                                        className="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300">
                                        {editingUser ? "Save" : "Create"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            )
     </div>
    );
};

export default AddUserModal;