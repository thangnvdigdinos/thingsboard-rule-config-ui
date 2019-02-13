/*
 * Copyright © 2016-2018 The Thingsboard Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export default function addRuleNodeCoreLocaleEnglish($translateProvider) {

    var en_US = {
        "tb": {
            "rulenode": {
                "create-entity-if-not-exists": "Create new entity if not exists",
                "create-entity-if-not-exists-hint": "Create a new entity set above if it does not exist.",
                "entity-name-pattern": "Name pattern",
                "entity-name-pattern-required": "Name pattern is required",
                "entity-name-pattern-hint": "Name pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                "entity-type-pattern": "Type pattern",
                "entity-type-pattern-required": "Type pattern is required",
                "entity-type-pattern-hint": "Type pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                "entity-cache-expiration": "Entities cache expiration time (sec)",
                "entity-cache-expiration-hint": "Specifies maximum time interval allowed to store found entity records. 0 value means that records will never expire.",
                "entity-cache-expiration-required": "Entities cache expiration time is required.",
                "entity-cache-expiration-range": "Entities cache expiration time should be greater than or equal to 0.",
                "customer-name-pattern": "Customer name pattern",
                "customer-name-pattern-required": "Customer name pattern is required",
                "create-customer-if-not-exists": "Create new customer if not exists",
                "customer-cache-expiration": "Customers cache expiration time (sec)",
                "customer-name-pattern-hint": "Customer name pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                "customer-cache-expiration-hint": "Specifies maximum time interval allowed to store found customer records. 0 value means that records will never expire.",
                "customer-cache-expiration-required": "Customers cache expiration time is required.",
                "customer-cache-expiration-range": "Customers cache expiration time should be greater than or equal to 0.",
                "start-interval": "Start Interval",
                "end-interval": "End Interval",
                "start-interval-time-unit": "Start Interval Time Unit",
                "end-interval-time-unit": "End Interval Time Unit",
                "fetch-mode": "Fetch mode",
                "time-unit-milliseconds": "Milliseconds",
                "time-unit-seconds": "Seconds",
                "time-unit-minutes": "Minutes",
                "time-unit-hours": "Hours",
                "time-unit-days": "Days",
                "time-value-range": "Time value should be in a range from 1 to 2147483647'.",
                "start-interval-value-required": "Start interval value is required.",
                "end-interval-value-required": "End interval value is required.",
                "filter": "Filter",
                "switch": "Switch",
                "message-type": "Message type",
                "message-type-required": "Message type is required.",
                "message-types-filter": "Message types filter",
                "no-message-types-found": "No message types found",
                "no-message-type-matching": "'{{messageType}}' not found.",
                "create-new-message-type": "Create a new one!",
                "message-types-required": "Message types are required.",
                "client-attributes": "Client attributes",
                "shared-attributes": "Shared attributes",
                "server-attributes": "Server attributes",
                "latest-timeseries": "Latest timeseries",
                "data-keys": "Message data",
                "metadata-keys": "Message metadata",
                "relations-query": "Relations query",
                "device-relations-query": "Device relations query",
                "max-relation-level": "Max relation level",
                "relation-type-pattern": "Relation type pattern",
                "relation-type-pattern-hint": "Relation type pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                "relation-type-pattern-required": "Relation type pattern is required",
                "unlimited-level": "Unlimited level",
                "latest-telemetry": "Latest telemetry",
                "attr-mapping": "Attributes mapping",
                "source-attribute": "Source attribute",
                "source-attribute-required": "Source attribute is required.",
                "source-telemetry": "Source telemetry",
                "source-telemetry-required": "Source telemetry is required.",
                "target-attribute": "Target attribute",
                "target-attribute-required": "Target attribute is required.",
                "attr-mapping-required": "At least one attribute mapping should be specified.",
                "fields-mapping": "Fields mapping",
                "fields-mapping-required": "At least one field mapping should be specified.",
                "source-field": "Source field",
                "source-field-required": "Source field is required.",
                "originator-source": "Originator source",
                "originator-customer": "Customer",
                "originator-tenant": "Tenant",
                "originator-related": "Related",
                "clone-message": "Clone message",
                "transform": "Transform",
                "default-ttl": "Default TTL in seconds",
                "default-ttl-required": "Default TTL is required.",
                "min-default-ttl-message": "Only 0 minimum TTL is allowed.",
                "message-count": "Message count (0 - unlimited)",
                "message-count-required": "Message count is required.",
                "min-message-count-message": "Only 0 minimum message count is allowed.",
                "period-seconds": "Period in seconds",
                "period-seconds-required": "Period is required.",
                "min-period-seconds-message": "Only 1 second minimum period is allowed.",
                "originator": "Originator",
                "message-body": "Message body",
                "message-metadata": "Message metadata",
                "generate": "Generate",
                "test-generator-function": "Test generator function",
                "generator": "Generator",
                "test-filter-function": "Test filter function",
                "test-switch-function": "Test switch function",
                "test-transformer-function": "Test transformer function",
                "transformer": "Transformer",
                "alarm-create-condition": "Alarm create condition",
                "test-condition-function": "Test condition function",
                "alarm-clear-condition": "Alarm clear condition",
                "alarm-details-builder": "Alarm details builder",
                "test-details-function": "Test details function",
                "alarm-type": "Alarm type",
                "alarm-type-required": "Alarm type is required.",
                "alarm-severity": "Alarm severity",
                "alarm-severity-required": "Alarm severity is required",
                "propagate": "Propagate",
                "condition": "Condition",
                "details": "Details",
                "to-string": "To string",
                "test-to-string-function": "Test to string function",
                "from-template": "From Template",
                "from-template-required": "From Template is required",
                "from-template-hint": "From address template, use <code>${metaKeyName}</code> to substitute variables from metadata",
                "to-template": "To Template",
                "to-template-required": "To Template is required",
                "mail-address-list-template-hint": "Comma separated address list, use <code>${metaKeyName}</code> to substitute variables from metadata",
                "cc-template": "Cc Template",
                "bcc-template": "Bcc Template",
                "subject-template": "Subject Template",
                "subject-template-required": "Subject Template is required",
                "subject-template-hint": "Mail subject template, use <code>${metaKeyName}</code> to substitute variables from metadata",
                "body-template": "Body Template",
                "body-template-required": "Body Template is required",
                "body-template-hint": "Mail body template, use <code>${metaKeyName}</code> to substitute variables from metadata",
                "request-id-metadata-attribute": "Request Id Metadata attribute name",
                "timeout-sec": "Timeout in seconds",
                "timeout-required": "Timeout is required",
                "min-timeout-message": "Only 0 minimum timeout value is allowed.",
                "endpoint-url-pattern": "Endpoint URL pattern",
                "endpoint-url-pattern-required": "Endpoint URL pattern is required",
                "endpoint-url-pattern-hint": "HTTP URL address pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                "request-method": "Request method",
                "use-simple-client-http-factory": "Use simple client HTTP factory",
                "headers": "Headers",
                "headers-hint": "Use <code>${metaKeyName}</code> in header/value fields to substitute variables from metadata",
                "header": "Header",
                "header-required": "Header is required",
                "value": "Value",
                "value-required": "Value is required",
                "topic-pattern": "Topic pattern",
                "topic-pattern-required": "Topic pattern is required",
                "mqtt-topic-pattern-hint": "MQTT topic pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                "bootstrap-servers": "Bootstrap servers",
                "bootstrap-servers-required": "Bootstrap servers value is required",
                "other-properties": "Other properties",
                "key": "Key",
                "key-required": "Key is required",
                "retries": "Automatically retry times if fails",
                "min-retries-message": "Only 0 minimum retries is allowed.",
                "batch-size-bytes": "Produces batch size in bytes",
                "min-batch-size-bytes-message": "Only 0 minimum batch size is allowed.",
                "linger-ms": "Time to buffer locally (ms)",
                "min-linger-ms-message": "Only 0 ms minimum value is allowed.",
                "buffer-memory-bytes": "Client buffer max size in bytes",
                "min-buffer-memory-message": "Only 0 minimum buffer size is allowed.",
                "acks": "Number of acknowledgments",
                "key-serializer": "Key serializer",
                "key-serializer-required": "Key serializer is required",
                "value-serializer": "Value serializer",
                "value-serializer-required": "Value serializer is required",
                "topic-arn-pattern": "Topic ARN pattern",
                "topic-arn-pattern-required": "Topic ARN pattern is required",
                "topic-arn-pattern-hint": "Topic ARN pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                "aws-access-key-id": "AWS Access Key ID",
                "aws-access-key-id-required": "AWS Access Key ID is required",
                "aws-secret-access-key": "AWS Secret Access Key",
                "aws-secret-access-key-required": "AWS Secret Access Key is required",
                "aws-region": "AWS Region",
                "aws-region-required": "AWS Region is required",
                "exchange-name-pattern": "Exchange name pattern",
                "routing-key-pattern": "Routing key pattern",
                "message-properties": "Message properties",
                "host": "Host",
                "host-required": "Host is required",
                "port": "Port",
                "port-required": "Port is required",
                "port-range": "Port should be in a range from 1 to 65535.",
                "virtual-host": "Virtual host",
                "username": "Username",
                "password": "Password",
                "automatic-recovery": "Automatic recovery",
                "connection-timeout-ms": "Connection timeout (ms)",
                "min-connection-timeout-ms-message": "Only 0 ms minimum value is allowed.",
                "handshake-timeout-ms": "Handshake timeout (ms)",
                "min-handshake-timeout-ms-message": "Only 0 ms minimum value is allowed.",
                "client-properties": "Client properties",
                "queue-url-pattern": "Queue URL pattern",
                "queue-url-pattern-required": "Queue URL pattern is required",
                "queue-url-pattern-hint": "Queue URL pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                "delay-seconds": "Delay (seconds)",
                "min-delay-seconds-message": "Only 0 seconds minimum value is allowed.",
                "max-delay-seconds-message": "Only 900 seconds maximum value is allowed.",
                "name": "Name",
                "name-required": "Name is required",
                "queue-type": "Queue type",
                "sqs-queue-standard": "Standard",
                "sqs-queue-fifo": "FIFO",
                "message-attributes": "Message attributes",
                "message-attributes-hint": "Use <code>${metaKeyName}</code> in name/value fields to substitute variables from metadata",
                "connect-timeout": "Connection timeout (sec)",
                "connect-timeout-required": "Connection timeout is required.",
                "connect-timeout-range": "Connection timeout should be in a range from 1 to 200.",
                "client-id": "Client ID",
                "clean-session": "Clean session",
                "enable-ssl": "Enable SSL",
                "credentials": "Credentials",
                "credentials-type": "Credentials type",
                "credentials-type-required": "Credentials type is required.",
                "credentials-anonymous": "Anonymous",
                "credentials-basic": "Basic",
                "credentials-pem": "PEM",
                "username-required": "Username is required.",
                "password-required": "Password is required.",
                "ca-cert": "CA certificate file *",
                "private-key": "Private key file *",
                "cert": "Certificate file *",
                "no-file": "No file selected.",
                "drop-file": "Drop a file or click to select a file to upload.",
                "private-key-password": "Private key password",
                "use-system-smtp-settings": "Use system SMTP settings",
                "use-metadata-interval-patterns": "Use metadata interval patterns",
                "use-metadata-interval-patterns-hint": "If selected, rule node use start and end interval patterns from message metadata assuming that intervals are in the milliseconds.",
                "use-message-alarm-data": "Use message alarm data",
                "check-all-keys": "Check that all selected keys are present",
                "check-all-keys-hint": "If selected checks that all specified keys are present in the message data and metadata.",
                "check-relation-to-specific-entity": "Check relation to specific entity",
                "check-relation-hint": "Checks existence of relation to specific entity or to any entity based on direction and relation type.",
                "delete-relation-to-specific-entity": "Delete relation to specific entity",
                "delete-relation-hint": "Deletes relation from the originator of the incoming message to the specified entity or list of entities based on direction and type.",
                "remove-current-relations": "Remove current relations",
                "remove-current-relations-hint": "Removes current relations from the originator of the incoming message based on direction and type.",
                "change-originator-to-related-entity": "Change originator to related entity",
                "change-originator-to-related-entity-hint": "Used to process submitted message as a message from another entity.",
                "start-interval-pattern": "Start interval pattern",
                "end-interval-pattern": "End interval pattern",
                "start-interval-pattern-required": "Start interval pattern is required",
                "end-interval-pattern-required": "End interval pattern is required",
                "start-interval-pattern-hint": "Start interval pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                "end-interval-pattern-hint": "End interval pattern, use <code>${metaKeyName}</code> to substitute variables from metadata",
                "smtp-protocol": "Protocol",
                "smtp-host": "SMTP host",
                "smtp-host-required": "SMTP host is required.",
                "smtp-port": "SMTP port",
                "smtp-port-required": "You must supply a smtp port.",
                "smtp-port-range": "SMTP port should be in a range from 1 to 65535.",
                "timeout-msec": "Timeout ms",
                "min-timeout-msec-message": "Only 0 ms minimum value is allowed.",
                "enter-username": "Enter username",
                "enter-password": "Enter password",
                "enable-tls": "Enable TLS",
                "min-period-0-seconds-message": "Only 0 second minimum period is allowed.",
                "max-pending-messages": "Maximum pending messages",
                "max-pending-messages-required": "Maximum pending messages is required.",
                "max-pending-messages-range": "Maximum pending messages should be in a range from 1 to 100000.",
                "originator-types-filter": "Originator types filter",
                "interval-seconds": "Interval in seconds",
                "interval-seconds-required": "Interval is required.",
                "min-interval-seconds-message": "Only 1 second minimum interval is allowed.",
                "output-timeseries-key-prefix": "Output timeseries key prefix",
                "output-timeseries-key-prefix-required": "Output timeseries key prefix required."
            },
            "key-val": {
                "key": "Key",
                "value": "Value",
                "remove-entry": "Remove entry",
                "add-entry": "Add entry"
            }
        }
    };

    $translateProvider.translations('en_US', en_US);

}
