import { jest } from "@jest/globals";

import { connection } from "./listeners";

const mockedSocket = {};

mockedSocket.emit = jest.fn(() => {});
mockedSocket.on = jest.fn(() => {});

beforeAll(() => {
  connection(mockedSocket);
});

describe("Sockets events are being implemented", () => {
  it("Should emit 'best match' event", () => {
    expect(mockedSocket.emit.mock.calls[0][0]).toBe("best match");
    expect(mockedSocket.emit.mock.calls[0][1].fastestTime).toBeUndefined();
  });

  it("Should listening to 'game started' event", () => {
    expect(mockedSocket.on.mock.calls[0][0]).toBe("game started");
    expect(mockedSocket.on.mock.calls[0][1]).toBeDefined();
  });

  it("Should listening to 'number pressed' event", () => {
    expect(mockedSocket.on.mock.calls[1][0]).toBe("number pressed");
    expect(mockedSocket.on.mock.calls[1][1]).toBeDefined();
  });

  it("Should emit 'sequence' event when 'game started'", () => {
    mockedSocket.on.mock.calls[0][1]();

    expect(mockedSocket.emit.mock.calls[1][0]).toBe("sequence");
    expect(mockedSocket.emit.mock.calls[1][1].seq).toHaveLength(10);
  });
});
