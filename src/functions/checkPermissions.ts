type Permission = {
  id: string;
  name: string;
};

type Role = {
  id: string;
  name: string;
  permissionsOfRole: Permission[];
};

type User = {
  id: string;
  name: string;
  permissionsOfUser: Permission[];
  rolesOfUser: Role[];
};

export const hasPermission = (
  user: User | null,
  permissionId: string
): boolean => {
  const rolePermission = user?.rolesOfUser.some((role) =>
    role.permissionsOfRole.some((permission) => permission.id === permissionId)
  );

  const directPermission = user?.permissionsOfUser.some(
    (permission) => permission.id === permissionId
  );

  return !!rolePermission || !!directPermission;
};
