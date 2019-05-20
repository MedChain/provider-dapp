
const data = {
  id: 1,
  '/parentFolder1': {
    userId: 1,
    path: '/parentFolder1',
    type: 'folder',
    isRoot: true,
    children: ['/parentFolder1/childFolder1', '/parentFolder1/childFolder2']
  }, 
  '/parentFolder1/childFolder1': {
    folderId: 1,
    path: '/parentFolder1/childFolder1',
    type: 'folder',
    children: []
  },
  '/parentFolder1/childFolder2': {
    folderId: 2,
    path: '/parentFolder1/childFolder2',
    type: 'folder',
    children: []
  },
  '/parentFolder2': {
    userId: 2,
    path: '/parentFolder2',
    type: 'folder',
    isRoot: true,
    children: []
  },
  '/parentFolder3': {
    userId: 3,
    path: '/parentFolder3',
    type: 'folder',
    isRoot: true,
    children: ['/parentFolder3/childFolder1', '/parentFolder3/childFolder2']
  },
  '/parentFolder3/childFolder1': {
    folderId: 1,
    path: '/parentFolder3/childFolder1',
    type: 'folder',
    children: ['/parentFolder3/childFolder1/childFolder1', '/parentFolder3/childFolder1/childFolder2']
  },
  '/parentFolder3/childFolder1/childFolder1': {
    folderId: 1,
    path: '/parentFolder1/childFolder1/childFolder1',
    type: 'folder',
    children: []
  },
  '/parentFolder3/childFolder1/childFolder2': {
    folderId: 2,
    path: '/parentFolder1/childFolder1/childFolder2',
    type: 'folder',
    children: []
  },
  '/parentFolder3/childFolder2': {
    folderId: 2,
    path: '/parentFolder3/childFolder2',
    type: 'folder',
    children: []
  }
}

export default data