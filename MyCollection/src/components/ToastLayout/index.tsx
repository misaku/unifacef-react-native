import React from "react";
import {Alert, CloseIcon, HStack, IconButton, Text, VStack} from "native-base";

const ToastAlert = ({
                        id,
                        status,
                        title,
                        description,
                        isClosable,
                        close,
                        ...rest
                    }: any) => <Alert maxWidth="100%" alignSelf="center" flexDirection="row" status={status ?? "info"}
                                 variant={"top-accent"} {...rest}>
    <VStack space={1} flexShrink={1} w="100%">
        <HStack flexShrink={1} alignItems="center" justifyContent="space-between">
            <HStack space={2} flexShrink={1} alignItems="center">
                <Alert.Icon/>
                <Text fontSize="md" fontWeight="medium" flexShrink={1} color={"darkText"}>
                    {title}
                </Text>
            </HStack>
            {isClosable ? <IconButton variant="unstyled" icon={<CloseIcon size="3"/>} _icon={{
                color: "darkText"
            }} onPress={() => close(id)}/> : null}
        </HStack>
        <Text px="6" color={"darkText"}>
            {description}
        </Text>
    </VStack>
</Alert>;

export const ToastLayout = {

    success : ({id = Date.now().toString(), description, isClosable = true, close}: any) => {
        return (
            <ToastAlert
                title={'Sucesso!'}
                id={id}
                status={'success'}
                close={close}
                description={description}
                isClosable={isClosable}
            />
        )
    },
    error : ({id = Date.now().toString(), description, isClosable = true, close}: any) => {
        return (
            <ToastAlert
                title={'Erro!'}
                id={id}
                status={'error'}
                description={description}
                isClosable={isClosable}
                close={close}
            />
        )
    }

};

