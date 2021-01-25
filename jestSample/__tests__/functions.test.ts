import {
  asyncSumOfArray,
  asyncSumOfArraySometimesZero,
  getFirstNameThrowIfLong,
  sumOfArray,
} from "../functions";
import { DatabaseMock as Database } from "../util";
import { NameApiService } from "../nameApiService";

jest.mock("../util");
jest.mock("../nameApiService");

const DatabaseMock = Database as jest.Mock;
const NameApiServiceMock = NameApiService as jest.Mock;

describe("functionsのテスト", () => {
  describe("sumOfArrayのテスト", () => {
    it("空配列だとエラーになること", () => {
      expect(() => {
        sumOfArray([]);
      }).toThrow(TypeError);
    });

    it("[1]を渡すと1が返ること", () => {
      expect(sumOfArray([1])).toBe(1);
    });

    it("[1,2,3]を渡すと6が返ること", () => {
      expect(sumOfArray([1, 2, 3])).toBe(6);
    });
  });

  describe("asyncSumOfArrayのテスト", () => {
    it("[1,2,3]を渡すと6が返ること", async () => {
      await expect(asyncSumOfArray([1, 2, 3])).resolves.toBe(6);
    });
  });

  describe("asyncSumOfArraySometimesZeroのテスト", () => {
    it("[1,2,3]を渡して保存に成功した場合は6が返ること", async () => {
      DatabaseMock.mockImplementationOnce(() => {
        return {
          save() {},
        };
      });

      await expect(asyncSumOfArraySometimesZero([1, 2, 3])).resolves.toBe(6);
    });

    it("[1,2,3]を渡して保存に失敗した場合は0が返ること", async () => {
      DatabaseMock.mockImplementationOnce(() => {
        return {
          save() {
            throw new Error("fail!");
          },
        };
      });

      await expect(asyncSumOfArraySometimesZero([1, 2, 3])).resolves.toBe(0);
    });
  });

  describe("getFirstNameThrowIfLongのテスト", () => {
    beforeAll(() => {
      NameApiServiceMock.mockImplementation(() => {
        return {
          getFirstName() {
            return "John";
          },
        };
      });
    });

    it("maxNameLengthより小さい名前の場合、その名前が返ること", async () => {
      await expect(getFirstNameThrowIfLong(4)).resolves.toBe("John");
    });

    it("maxNameLengthより大きい名前の場合、エラーになること", async () => {
      await expect(getFirstNameThrowIfLong(3)).rejects.toThrow(Error);
    });
  });
});
