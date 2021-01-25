import { NameApiService } from "../nameApiService";
import axios, { AxiosInstance } from "axios";

jest.mock("axios");

const axiosMock: jest.Mocked<AxiosInstance> = axios as any;

describe("NameApiServiceのテスト", () => {
  it("MAX_LENGTHより長いとエラーになること", async () => {
    axiosMock.get.mockImplementationOnce(async () => ({
      // eslint-disable-next-line @typescript-eslint/camelcase
      data: { first_name: "Michael" },
    }));

    await expect(new NameApiService().getFirstName()).rejects.toThrow(Error);
  });

  it("MAX_LENGTHより短いとfirst_nameが返ること", async () => {
    axiosMock.get.mockImplementationOnce(async () => ({
      // eslint-disable-next-line @typescript-eslint/camelcase
      data: { first_name: "John" },
    }));

    await expect(new NameApiService().getFirstName()).resolves.toBe("John");
  });
});
