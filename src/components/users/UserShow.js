import React from 'react';
import {
    Show,
    TabbedForm,
    FormTab,
} from 'react-admin'

const UserShow = (props) => {
    return (
        <Show {...props} title={'hello kitty'}>
            <TabbedForm>
                <FormTab
                    label="resources.users.tabs.shops"
                    sx={{ maxWidth: '40em' }}
                >
                    {/*<ReferenceManyField*/}
                    {/*    reference="shops"*/}
                    {/*    target="user_id"*/}
                    {/*    // pagination={<Pagination />}*/}
                    {/*>*/}
                    {/*    <Datagrid*/}
                    {/*        sx={{*/}
                    {/*            width: '100%',*/}
                    {/*            '& .column-comment': {*/}
                    {/*                maxWidth: '20em',*/}
                    {/*                overflow: 'hidden',*/}
                    {/*                textOverflow: 'ellipsis',*/}
                    {/*                whiteSpace: 'nowrap',*/}
                    {/*            },*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        <DateField source="date" />*/}
                    {/*        <CustomerReferenceField />*/}
                    {/*        <StarRatingField />*/}
                    {/*        <TextField source="comment" />*/}
                    {/*        <TextField source="status" />*/}
                    {/*        <EditButton />*/}
                    {/*    </Datagrid>*/}
                    {/*</ReferenceManyField>*/}
                </FormTab>
                {/*<FormTab*/}
                {/*    label="resources.products.tabs.details"*/}
                {/*    path="details"*/}
                {/*    sx={{ maxWidth: '40em' }}*/}
                {/*>*/}
                {/*    /!*<ProductEditDetails />*!/*/}
                {/*</FormTab>*/}
                {/*<FormTab*/}
                {/*    label="resources.products.tabs.description"*/}
                {/*    path="description"*/}
                {/*    sx={{ maxWidth: '40em' }}*/}
                {/*>*/}
                {/*    /!*<RichTextInput source="description" label="" validate={req} />*!/*/}
                {/*</FormTab>*/}
                {/*<ReviewsFormTab path="reviews">*/}
                {/*    <ReferenceManyField*/}
                {/*        reference="reviews"*/}
                {/*        target="product_id"*/}
                {/*        pagination={<Pagination />}*/}
                {/*    >*/}
                {/*        <Datagrid*/}
                {/*            sx={{*/}
                {/*                width: '100%',*/}
                {/*                '& .column-comment': {*/}
                {/*                    maxWidth: '20em',*/}
                {/*                    overflow: 'hidden',*/}
                {/*                    textOverflow: 'ellipsis',*/}
                {/*                    whiteSpace: 'nowrap',*/}
                {/*                },*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            <DateField source="date" />*/}
                {/*            <CustomerReferenceField />*/}
                {/*            <StarRatingField />*/}
                {/*            <TextField source="comment" />*/}
                {/*            <TextField source="status" />*/}
                {/*            <EditButton />*/}
                {/*        </Datagrid>*/}
                {/*    </ReferenceManyField>*/}
                {/*</ReviewsFormTab>*/}
            </TabbedForm>
        </Show>
    );
};

export default UserShow;