import validateIOSCategory from '@notifee/react-native/src/validators/validateIOSCategory';
import { IOSNotificationCategory } from '@notifee/react-native/src/types/NotificationIOS';

describe('Validate Android Style', () => {
  describe('validateAndroidBigPictureStyle()', () => {
    test('returns valid ', async () => {
      const category: IOSNotificationCategory = {
        id: 'id',
        summaryFormat: 'summaryFormat',
        allowInCarPlay: false,
        allowAnnouncement: false,
        hiddenPreviewsShowTitle: false,
        hiddenPreviewsShowSubtitle: false,
        hiddenPreviewsBodyPlaceholder: 'hiddenPreviewsBodyPlaceholder',
      };

      const $ = validateIOSCategory(category);
      expect($.id).toEqual('id');
      expect($.summaryFormat).toEqual('summaryFormat');
      expect($.allowInCarPlay).toEqual(false);
      expect($.allowAnnouncement).toEqual(false);
      expect($.hiddenPreviewsShowTitle).toEqual(false);
      expect($.hiddenPreviewsShowSubtitle).toEqual(false);
      expect($.hiddenPreviewsBodyPlaceholder).toEqual('hiddenPreviewsBodyPlaceholder');
    });

    test('throws an error with an invalid largeIcon param', async () => {
      const category: IOSNotificationCategory = [] as any;

      expect(() => validateIOSCategory(category)).toThrowError(
        "'category' expected an object value.",
      );
    });

    test('throws an error with an invalid largeIcon param', async () => {
      const category: IOSNotificationCategory = { id: [] as any };

      expect(() => validateIOSCategory(category)).toThrowError(
        "'category.id' expected a string value.",
      );
    });

    test('throws an error with an invalid largeIcon param', async () => {
      const category: IOSNotificationCategory = { id: '' as any };

      expect(() => validateIOSCategory(category)).toThrowError(
        "'category.id' expected a valid string id.",
      );
    });

    test('throws an error with an invalid summaryFormat param', async () => {
      const category: IOSNotificationCategory = { id: 'id', summaryFormat: [] as any };

      expect(() => validateIOSCategory(category)).toThrowError(
        "'category.summaryFormat' expected a string value.",
      );
    });

    test('throws an error with an invalid allowInCarPlay param', async () => {
      const category: IOSNotificationCategory = { id: 'id', allowInCarPlay: [] as any };

      expect(() => validateIOSCategory(category)).toThrowError(
        "'category.allowInCarPlay' expected a boolean value.",
      );
    });

    test('throws an error with an invalid allowAnnouncement param', async () => {
      const category: IOSNotificationCategory = { id: 'id', allowAnnouncement: [] as any };

      expect(() => validateIOSCategory(category)).toThrowError(
        "'category.allowAnnouncement' expected a boolean value.",
      );
    });

    test('throws an error with an invalid hiddenPreviewsShowTitle param', async () => {
      const category: IOSNotificationCategory = { id: 'id', hiddenPreviewsShowTitle: [] as any };

      expect(() => validateIOSCategory(category)).toThrowError(
        "'category.hiddenPreviewsShowTitle' expected a boolean value.",
      );
    });

    test('throws an error with an invalid hiddenPreviewsShowSubtitle param', async () => {
      const category: IOSNotificationCategory = { id: 'id', hiddenPreviewsShowSubtitle: [] as any };

      expect(() => validateIOSCategory(category)).toThrowError(
        "'category.hiddenPreviewsShowSubtitle' expected a boolean value.",
      );
    });

    test('throws an error with an invalid hiddenPreviewsBodyPlaceholder param', async () => {
      const category: IOSNotificationCategory = {
        id: 'id',
        hiddenPreviewsBodyPlaceholder: [] as any,
      };

      expect(() => validateIOSCategory(category)).toThrowError(
        "'category.hiddenPreviewsBodyPlaceholder' expected a string value.",
      );
    });

    test('throws an error with an invalid intentIdentifiers param', async () => {
      const category: IOSNotificationCategory = {
        id: 'id',
        intentIdentifiers: {} as any,
      };

      expect(() => validateIOSCategory(category)).toThrowError(
        "'category.intentIdentifiers' expected an array value.",
      );
    });

    test('throws an error with an invalid intentIdentifiers param', async () => {
      const category: IOSNotificationCategory = {
        id: 'id',
        intentIdentifiers: ['test'] as any,
      };

      expect(() => validateIOSCategory(category)).toThrowError(
        '\'category.intentIdentifiers\' unexpected intentIdentifier "test" at array index "0".',
      );
    });

    test('throws an error with an invalid actions param', async () => {
      const category: IOSNotificationCategory = {
        id: 'id',
        actions: {} as any,
      };

      expect(() => validateIOSCategory(category)).toThrowError(
        "'category.actions' expected an array value.",
      );
    });

    test('throws an error with an invalid actions array param', async () => {
      const category: IOSNotificationCategory = {
        id: 'id',
        actions: ['test'] as any,
      };

      expect(() => validateIOSCategory(category)).toThrowError(
        '\'category.actions\' invalid action at index "0". Error: "action" expected an object value',
      );
    });
  });
});
