import React from 'react';
import {
    Edit,
    ReferenceArrayInput,
    SelectArrayInput,
    NumberInput,
    required,
    SimpleForm,
    TextInput,
    ImageField, ImageInput
} from "react-admin";

const ModuleEdit = (props) => {
    console.log(props)
    return (
        <Edit {...props}>
            <SimpleForm>
                {/*<ImageInput*/}
                {/*    uuid={''}*/}
                {/*    images={[]}*/}
                {/*/>*/}
                <ImageInput source="image" label="Картинка">
                    <ImageField source="src" title="title" />
                </ImageInput>
                <ImageInput multiple source="images" label="Картинки на слайдер">
                    <ImageField source="src" title="title" />
                </ImageInput>
                <TextInput validate={required()} label='Название' source="title" />
                <TextInput validate={required()} label='Ключ' source="slug" />
                <TextInput multiline validate={required()} label='Описание' source="description" />
                <NumberInput validate={required()} label='Цена' source="price" />
                <ReferenceArrayInput source="dependencies_ids" reference="modules">
                    <SelectArrayInput optionText={'title'}/>
                </ReferenceArrayInput>
            </SimpleForm>
        </Edit>
    );
};

export default ModuleEdit;