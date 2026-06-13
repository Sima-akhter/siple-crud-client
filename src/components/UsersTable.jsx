import { Table } from '@heroui/react';
import {Button} from "@heroui/react";
import Link from 'next/link';
import {AlertDialog} from "@heroui/react";

const UsersTable = ({users}) => {
    return (
        <Table>
            <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-[600px]">
                    <Table.Header>
                        <Table.Column isRowHeader>Name</Table.Column>
                        <Table.Column>Email</Table.Column>
                        <Table.Column>Role</Table.Column>
                        <Table.Column>Action</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {
                            users.map(user =>  <Table.Row key={user._id}>
                            <Table.Cell>{user.name}</Table.Cell>
                                <Table.Cell>{ user.email}</Table.Cell>
                                <Table.Cell>{ user.role}</Table.Cell>
                                <Table.Cell>
                                    <Link href={`/users/${user._id}`}>
                                        <Button variant="outline">Details</Button>
                                    </Link>
                                    <Link href={`/users/${user._id}`}>
                                        <Button variant="outline">Edit</Button>
                                    </Link>
                                    <Link href={`/users/${user._id}`}>
                                         <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
                                    </Link>
                                        
                            </Table.Cell>
                        </Table.Row>)
                        }
                       
                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table>
    )
}

export default UsersTable