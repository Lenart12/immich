import { LibraryEntity, LibraryType } from '@app/infra/entities';
import { userStub } from './user.stub';

export const libraryStub = {
  uploadLibrary1: Object.freeze<LibraryEntity>({
    id: 'library-id',
    name: 'test_library',
    assets: [],
    owner: userStub.user1,
    ownerId: 'user-id',
    type: LibraryType.UPLOAD,
    importPaths: [],
    createdAt: new Date('2022-01-01'),
    updatedAt: new Date('2022-01-01'),
    refreshedAt: null,
    isVisible: true,
    exclusionPatterns: [],
    isWatched: false,
  }),
  externalLibrary1: Object.freeze<LibraryEntity>({
    id: 'library-id',
    name: 'test_library',
    assets: [],
    owner: userStub.externalPath1,
    ownerId: 'user-id',
    type: LibraryType.EXTERNAL,
    importPaths: [],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
    refreshedAt: null,
    isVisible: true,
    exclusionPatterns: [],
    isWatched: false,
  }),
  externalLibrary2: Object.freeze<LibraryEntity>({
    id: 'library-id2',
    name: 'test_library2',
    assets: [],
    owner: userStub.externalPath1,
    ownerId: 'user-id',
    type: LibraryType.EXTERNAL,
    importPaths: [],
    createdAt: new Date('2021-01-01'),
    updatedAt: new Date('2022-01-01'),
    refreshedAt: null,
    isVisible: true,
    exclusionPatterns: [],
    isWatched: false,
  }),
  externalLibraryWithImportPaths: Object.freeze<LibraryEntity>({
    id: 'library-id-with-paths',
    name: 'library-with-import-paths',
    assets: [],
    owner: userStub.externalPath1,
    ownerId: 'user-id',
    type: LibraryType.EXTERNAL,
    importPaths: ['/foo', '/bar'],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
    refreshedAt: null,
    isVisible: true,
    exclusionPatterns: [],
    isWatched: false,
  }),
  watchedExternalLibrary1: Object.freeze<LibraryEntity>({
    id: 'watched-id',
    name: 'watched_library',
    assets: [],
    owner: userStub.externalPath1,
    ownerId: 'user-id',
    type: LibraryType.EXTERNAL,
    importPaths: ['/foo', '/bar'],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
    refreshedAt: null,
    isVisible: true,
    exclusionPatterns: [],
    isWatched: true,
  }),
  watchedExternalLibrary2: Object.freeze<LibraryEntity>({
    id: 'library-id',
    name: 'watched_library2',
    assets: [],
    owner: userStub.externalPath1,
    ownerId: 'user-id',
    type: LibraryType.EXTERNAL,
    importPaths: ['/mnt/external-path'],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
    refreshedAt: null,
    isVisible: true,
    exclusionPatterns: [],
    isWatched: true,
  }),
};
