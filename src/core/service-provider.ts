import type {InjectionKey} from "vue";
import type {Message} from "@/core/message";
import type {LoginService, Service} from "@/services/service";
import type LogEntry from "@/core/log-entry";
import type {AxiosInstance} from "axios";

export const axiosInstanceProviderKey: InjectionKey<AxiosInstance> = Symbol("axiosInstance");
export const messageServiceProviderKey: InjectionKey<Service<Message>> = Symbol('messageServiceProviderKey');
export const logsServiceProviderKey: InjectionKey<Service<LogEntry>> = Symbol('logsServiceProviderKey');
export const loginServiceProviderKey: InjectionKey<LoginService<any>> = Symbol('loginServiceProviderKey');

