

//FORMULARIO CON FORMIK NO FUNCIONO


// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { getCategories } from '../../Redux/Actions/action';

// const validationSchema = Yup.object().shape({
//     title: Yup.string().required('El nombre del producto es obligatorio'),
//     image: Yup.string().required('Se necesita una imagen'),
//     price: Yup.number().required('El precio es requerido').positive('Debe ser un valor positivo'),
//     category: Yup.string().required('Agrega una categoría'),
//     stock: Yup.number().integer().min(1).required('Agrega las unidades disponibles'),
//     sold: Yup.number().integer().min(0).required('Agrega las unidades vendidas'),
//     description: Yup.string().required('Debes agregar una descripción'),
// });

// const ProductForm = () => {
//     const dispatch = useDispatch();
//     const categories = useSelector((state) => state.categories);

//     const [selectedCategory, setSelectedCategory] = useState('');

//     useEffect(() => {
//         dispatch(getCategories());
//     }, [dispatch]);

//     const handleSubmit = async (values, {setSubmitting}) => {
//         try {
//             const dataToSend = { ...values, category: selectedCategory };
//             const response = await axios.post('/products', dataToSend);
//             console.log('Producto creado', response.data);
//             console.log(dataToSend)
//         } catch (error) {
//             console.error('Error al crear producto', error)
//         } finally {
//             setSubmitting(false);
//         }
//     }
//     return (
//         <Formik
//             initialValues={{
//                 title: '',
//                 image: '',
//                 price: 0,
//                 stock: 0,
//                 // category: '',
//                 sold: 0,
//                 description: '',
//             }}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//         >
//             {({ errors, touched, isSubmitting }) => (
//                 <Form className="max-w-md mx-auto my-4 p-4 border rounded-lg shadow-lg">
//                     <div className="mb-4">
//                         <label htmlFor="title" className="block font-semibold mb-1 text-gray-700">Nombre del producto:</label>
//                         <Field type="text" id="title" name="title" className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />
//                         <ErrorMessage name="title" component="div" className="text-red-500" />
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="image" className="block font-semibold mb-1 text-gray-700">URL de la imagen:</label>
//                         <Field type="text" id="image" name="image" className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />
//                         <ErrorMessage name="image" component="div" className="text-red-500" />
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="price" className="block font-semibold mb-1 text-gray-700">Precio:</label>
//                         <Field type="number" id="price" name="price" className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />
//                         <ErrorMessage name="price" component="div" className="text-red-500" />
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="stock" className="block font-semibold mb-1 text-gray-700">Unidades disponibles:</label>
//                         <Field type="number" id="stock" name="stock" className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />
//                         <ErrorMessage name="stock" component="div" className="text-red-500" />
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="sold" className="block font-semibold mb-1 text-gray-700">Unidades vendidas:</label>
//                         <Field type="number" id="sold" name="sold" className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />
//                         <ErrorMessage name="sold" component="div" className="text-red-500" />
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="category" className="block font-semibold mb-1 text-gray-700">Categoría:</label>
//                         <Field as="select" id="category" name="category" onChange={(e) => setSelectedCategory(e.target.value)} className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300">
//                             <option value="">Seleccionar categoría</option>
//                             {categories.map((category) => (
//                                 <option key={category.id} value={category.name}>
//                                     {category.name}
//                                 </option>
//                             ))}
//                         </Field>
//                         <ErrorMessage name="category" component="div" className="text-red-500" />
//                     </div>

//                     <button type="submit" disabled={isSubmitting}>
//                         Guardar Producto
//                     </button>
//                 </Form>
//             )}
//         </Formik>
//     );
// }
// export default ProductForm;

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories, addProduct } from '../../Redux/Actions/action';
import { Validate } from './Validation'
// import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
    // const [createdProduct, setCreatedProduct] = useState(null);
    // const navigate = useNavigate();

    const [succesMessage, setSuccesMessage] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        price: 0,
        stock: 0,
        sold: 0,
        description: '',
        category: '',
    });

    const [errors, setErrors] = useState({})

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = Validate(formData);
        setErrors(validationErrors)

        if(Object.keys(validationErrors).length > 0){
            return;
        }

        try {
            const response = await axios.post('/products', formData);
            console.log('Producto creado', response.data);
            // setCreatedProduct(response.data);
            setSuccesMessage('Producto creado correctamente');
            dispatch(addProduct(response.data))

            //Configuracion para redireccion
            // setTimeout(() => {
            //     if (createdProduct) {
            //         navigate.push(`/detail/${createdProduct.id}`)
            //     }
            // }, 3000)

            console.log(formData);
        } catch (error) {
            console.error('Error al crear producto', error);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-4 border rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block font-semibold mb-1 text-gray-700">
                        Nombre del producto:
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {errors.title && <div className="text-red-500">{errors.title}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block font-semibold mb-1 text-gray-700">
                        URL de la imagen:
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        className="w-full p-2 border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {errors.image && <div className="text-red-500">{errors.image}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block font-semibold mb-1 text-gray-700">
                        Precio:
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {errors.price && <div className="text-red-500">{errors.price}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="stock" className="block font-semibold mb-1 text-gray-700">
                        Unidades disponibles:
                    </label>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        value={formData.stock}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {errors.stock && <div className="text-red-500">{errors.stock}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="sold" className="block font-semibold mb-1 text-gray-700">
                        Unidades vendidas:
                    </label>
                    <input
                        type="number"
                        id="sold"
                        name="sold"
                        value={formData.sold}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {errors.sold && <div className="text-red-500">{errors.sold}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="category" className="block font-semibold mb-1 text-gray-700">
                        Categoría:
                    </label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    >
                        <option value="">Seleccionar categoría</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block font-semibold mb-1 text-gray-700">
                        Descripción del producto:
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {errors.description && <div className="text-red-500">{errors.description}</div>}
                </div>

                <button
                    type="submit"
                    className="mt-4 bg-violet-800
                    text-white py-2 px-4 rounded
                    hover:bg-violet-900 focus:outline-none focus:ring-2
                    focus:ring-blue-600"
                // disabled={isSubmitting}
                >
                    Guardar Producto
                </button>

                {succesMessage && (
                    <div className='mt-4 p-2 text-green-600 bg-green-200 rounded'>
                        {succesMessage}
                    </div>
                )}
            </form>
        </div>
    );
};

export default ProductForm;